import init from './init'

const keen = async config => {
  const Keen = await init()
  const client = new Keen(config)

  const track = data => {
    const e = {
      keen: {
        addons: [
          {
            name: 'keen:ip_to_geo',
            input: {
              ip: 'ipAddress',
            },
            output: 'geo',
          },
          {
            name: 'keen:ua_parser',
            input: {
              ua_string: 'userAgent',
            },
            output: 'browser',
          },
        ],
      },
      ipAddress: '${keen.ip}', // eslint-disable-line
      userAgent: '${keen.user_agent}', // eslint-disable-line
      ...data,
    }
    client.addEvent(data.type, e, (err, res) => {
      if (err) console.error('keen error:', err)
    })
  }

  return track
}

export default keen
