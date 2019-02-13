// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },
  regtest: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0
  },
  dogecoin: {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e
  },
  dash: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x02fe52f8,
      private: 0x02fe52cc
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc
  },
  dash_testnet: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x3a8061a0,
      private: 0x3a805837
    },
    pubKeyHash: 0x8b,
    scriptHash: 0x13,
    wif: 0xef
  },
  particl: {
    messagePrefix: '\x19Particl Signed Message:\n',
    bip32: {
      public: 0x696e82d1,
      private: 0x8f1daeb8
    },
    pubKeyHash: 0x38,
    scriptHash: 0x3c,
    wif: 0x6c
  },
  particl_testnet: {
    messagePrefix: '\x19Particl Signed Message:\n',
    bip32: {
      public: 0xe1427800,
      private: 0x04889478
    },
    pubKeyHash: 0x76,
    scriptHash: 0x7a,
    wif: 0x2e
  }

}
