import computeTVL from ".";

jest.setTimeout(10000);
test("compute tvl of ethereum and bsc tokens", async () => {
  const knownPrices = {};
  expect(
    await computeTVL(
      {
        '0x6f259637dcd74c767781e37bc6133cd6a68aa161': '3193525665566784275723138',
        'heco:0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4': '1047556118646987925068',
        'heco:0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3': '236654328014720960482935',
        'heco:0xae3a768f9aB104c69A7CD6041fE16fFa235d1810': '16569632182924952096418',
        'heco:0x9e004545c59D359F6B7BFB06a26390b087717b42': '961004175478694236526',
        'binance-eth': 27.06634107102854,
        'heco:0xa71EdC38d189767582C38A3145b5873052c3e47a': '31268806605177889114148968',
        'heco:0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c': '192506692195331535945631',
        'heco:0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047': '2158672533322793',
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': '11093082876512',
        'heco:0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa': '996379172178921963142',
        'heco:0x22C54cE8321A4015740eE1109D9cBc25815C46E6': '23914657385695466323057',
        '0x6b175474e89094c44da98b954eedeac495271d0f': '7107526494042094908468667',
        'heco:0xE499Ef4616993730CEd0f31FA2703B92B50bB536': '137205675925769131064013486',
        'heco:0xB4F019bEAc758AbBEe2F906033AAa2f0F6Dacb35': '364494623629203573',
        'heco:0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375': '3129531295952878112773',
        'heco:0x64FF637fB478863B7468bc97D30a5bF3A428a1fD': '9192054317393320446391',
        'heco:0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c': '148911552859786953196071',
        'heco:0x64ff637fb478863b7468bc97d30a5bf3a428a1fd': '5894279017068474040638',
        'heco:0x66a79d23e58475d2738179ca52cd0b41d73f0bea': '612867016701208550102',
        'heco:0x0298c2b32eae4da002a15f36fdf7615bea3da047': '322847070254',
        'heco:0xa71edc38d189767582c38a3145b5873052c3e47a': '27261644010709722098844276'
      },      
      1625612400,
      true,
      knownPrices
    )
  ).toBeDefined()
  return
  expect(
    await computeTVL(
      {
        "0x0000000000000000000000000000000000000000": "100000000000000000000", // 100 ETH
        "pancakeswap-token": "1000.51", // 1000 CAKE
        "bsc:0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82":
          "100000000000000000000",
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "200000000", // 2 WBTC
      },
      "now",
      false,
      knownPrices
    )
  ).toBeGreaterThan(1e5);
  expect(
    await computeTVL(
      {
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "200000000", // 2 WBTC
      },
      "now"
    )
  ).toBeGreaterThan(1e3);
  expect(
    await computeTVL(
      {
        "pancakeswap-token": "1000.51", // 1000 CAKE
      },
      "now"
    )
  ).toBeGreaterThan(1e3);
  expect(
    await computeTVL(
      {
        "bsc:0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82":
          "100000000000000000000",
      },
      "now"
    )
  ).toBeGreaterThan(1e3);
  expect(
    await computeTVL(
      {
        "0x0000000000000000000000000000000000000000": "100000000000000000000", // 100 ETH
      },
      "now",
      false,
      knownPrices
    )
  ).toBeGreaterThan(1e3);
});
