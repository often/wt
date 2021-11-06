export const WT = config =>
{
  const div = document.createElement('div')
  const input = document.createElement('input')
  const wt = {
    prefix: config.prefix ?? '',
    suffix: config.suffix ?? ' $',
    commands: config.commands ?? {},
    addCommand(command) { this.commands[command.name] = command },
    addCommands(commands) { for (const command in commands) this.commands[command] = commands[command] },
    print(text)
    {
      const pre = document.createElement('pre')
      pre.textContent = text
      div.append(pre)
    }
  }
  
  if (config.help)
  {
    input.placeholder = 'type `help` and hit enter for a list of commands...'
    
    wt.commands.help = () =>
    {
      const p = document.createElement('p')
      p.textContent = `${wt.prefix}help${wt.suffix} available commands (${Object.keys(wt.commands).length})`
      div.append(p)
      
      for (const command in wt.commands)
      {
        const { length } = wt.commands[command]
        const p = document.createElement('p')
        
        if (length)
        {
          if (length === 1) p.textContent = `${command} (takes ${length} argument)`
          else p.textContent = `${command} (takes ${length} arguments)`
        }
        else p.textContent = command
        
        div.append(p)
      }
    }
  }
  else input.placeholder = 'type here and hit enter to run a command...'
  
  if (config.clear) wt.commands.clear = () => div.textContent = ''
  if (config.autofocus) input.autofocus = true
  if (config.banner) wt.print(config.banner)
  
  input.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter')
    {
      const [cmd, ...args] = input.value.split(/\s/)
      
      if (!cmd) return
      
      const command = wt.commands[cmd]
      
      if (command) switch (command.constructor.name)
      {
        case 'Function':
          const output = command(...args)
          
          if (output)
          {
            const p = document.createElement('p')
            p.textContent = `${wt.prefix}${cmd}${wt.suffix} ${output}`
            div.append(p)
          }
        break
        
        case 'AsyncFunction':
          command(...args).then(output => {
            if (output)
            {
              const p = document.createElement('p')
              p.textContent = `${wt.prefix}${cmd}${wt.suffix} ${output}`
              div.append(p)
              div.scrollTop = div.scrollHeight
            }
          })
      }
      else
      {
        const p = document.createElement('p')
        p.textContent = `${wt.prefix}${cmd}${wt.suffix} unknown command`
        div.append(p)
      }
      
      input.value = ''
      div.scrollTop = div.scrollHeight
    }
  })
  
  config.element.append(div)
  config.element.append(input)
  
  return wt
}
