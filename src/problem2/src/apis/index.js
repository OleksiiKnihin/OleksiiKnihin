async function fetchCurrencies() {
  const rs = await fetch('https://interview.switcheo.com/prices.json')
  const data = await rs.json()

  const newData = await Promise.all(
    data.map(async (item) => {
      const iconURL = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${item.currency}.svg`

      return {
        ...item,
        iconURL: iconURL
      }
    })
  )

  return newData
}

export { fetchCurrencies }
