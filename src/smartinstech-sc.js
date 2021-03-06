var smartInsTechAddress = '0x51bd98a68e6cd2cc8b5779c65ce00fbae7a88204';
var smartInsTechABI = [

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": true,

                "name": "previousOwner",

                "type": "address"

            },

            {

                "indexed": true,

                "name": "newOwner",

                "type": "address"

            }

        ],

        "name": "OwnershipTransferred",

        "type": "event"

    },

    {

        "constant": false,

        "inputs": [

            {

                "name": "_data",

                "type": "string"

            },

            {

                "name": "_baggageId",

                "type": "uint256"

            }

        ],

        "name": "__callback",

        "outputs": [],

        "payable": false,

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "constant": false,

        "inputs": [

            {

                "name": "_baggageId",

                "type": "uint256"

            }

        ],

        "name": "checkBaggage",

        "outputs": [],

        "payable": false,

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "constant": false,

        "inputs": [

            {

                "name": "_baggageId",

                "type": "uint256[]"

            },

            {

                "name": "_dateTimeOfFirstPayout",

                "type": "uint256"

            },

            {

                "name": "_pricePerBaggage",

                "type": "uint256"

            },

            {

                "name": "_maxPayoutPerBaggage",

                "type": "uint256"

            },

            {

                "name": "_apiUrl",

                "type": "string"

            },

            {

                "name": "_pathToData",

                "type": "string"

            },

            {

                "name": "_selfPayout",

                "type": "bool"

            }

        ],

        "name": "createInsurance",

        "outputs": [],

        "payable": true,

        "stateMutability": "payable",

        "type": "function"

    },

    {

        "constant": false,

        "inputs": [],

        "name": "takeMoneyFromContract",

        "outputs": [],

        "payable": false,

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "constant": false,

        "inputs": [

            {

                "name": "newOwner",

                "type": "address"

            }

        ],

        "name": "transferOwnership",

        "outputs": [],

        "payable": false,

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": false,

                "name": "baggageId",

                "type": "uint256"

            },

            {

                "indexed": false,

                "name": "user",

                "type": "address"

            },

            {

                "indexed": false,

                "name": "price",

                "type": "uint256"

            },

            {

                "indexed": false,

                "name": "maxPayout",

                "type": "uint256"

            },

            {

                "indexed": false,

                "name": "dateTimeOfFirstPayout",

                "type": "uint256"

            }

        ],

        "name": "InsuranceConcluded",

        "type": "event"

    },

    {

        "payable": true,

        "stateMutability": "payable",

        "type": "fallback"

    },

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": false,

                "name": "baggageId",

                "type": "uint256"

            },

            {

                "indexed": false,

                "name": "payout",

                "type": "uint256"

            },

            {

                "indexed": false,

                "name": "tier",

                "type": "string"

            },

            {

                "indexed": false,

                "name": "to",

                "type": "address"

            }

        ],

        "name": "InsurancePayout",

        "type": "event"

    },

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": false,

                "name": "baggageId",

                "type": "uint256"

            },

            {

                "indexed": false,

                "name": "reason",

                "type": "string"

            }

        ],

        "name": "PayoutNotPossible",

        "type": "event"

    },

    {

        "inputs": [],

        "payable": true,

        "stateMutability": "payable",

        "type": "constructor"

    },

    {

        "constant": true,

        "inputs": [

            {

                "name": "",

                "type": "uint256"

            }

        ],

        "name": "baggageData",

        "outputs": [

            {

                "name": "",

                "type": "string"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [],

        "name": "balancePayin",

        "outputs": [

            {

                "name": "",

                "type": "uint256"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [],

        "name": "balancePayout",

        "outputs": [

            {

                "name": "",

                "type": "uint256"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [],

        "name": "get_os_address",

        "outputs": [

            {

                "name": "",

                "type": "address"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [

            {

                "name": "_baggageId",

                "type": "uint256"

            }

        ],

        "name": "getInsurance",

        "outputs": [

            {

                "name": "",

                "type": "uint256"

            },

            {

                "name": "",

                "type": "address"

            },

            {

                "name": "",

                "type": "uint256"

            },

            {

                "name": "",

                "type": "uint256"

            },

            {

                "name": "",

                "type": "uint256"

            },

            {

                "name": "",

                "type": "uint256"

            },

            {

                "name": "",

                "type": "bool"

            },

            {

                "name": "",

                "type": "bool"

            },

            {

                "name": "",

                "type": "bool"

            },

            {

                "name": "",

                "type": "bool"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [],

        "name": "getTimeStamp",

        "outputs": [

            {

                "name": "",

                "type": "uint256"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [

            {

                "name": "",

                "type": "uint256"

            }

        ],

        "name": "Insurances",

        "outputs": [

            {

                "name": "baggageId",

                "type": "uint256"

            },

            {

                "name": "user",

                "type": "address"

            },

            {

                "name": "dateTimeOfFirstPayout",

                "type": "uint256"

            },

            {

                "name": "price",

                "type": "uint256"

            },

            {

                "name": "maxPayout",

                "type": "uint256"

            },

            {

                "name": "paid1stTier",

                "type": "bool"

            },

            {

                "name": "paid2ndTier",

                "type": "bool"

            },

            {

                "name": "paid3rdTier",

                "type": "bool"

            },

            {

                "name": "totalPaid",

                "type": "uint256"

            },

            {

                "name": "apiUrl",

                "type": "string"

            },

            {

                "name": "pathToData",

                "type": "string"

            },

            {

                "name": "closed",

                "type": "bool"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [

            {

                "name": "_addr",

                "type": "address"

            }

        ],

        "name": "isEligible",

        "outputs": [

            {

                "name": "",

                "type": "bool"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    },

    {

        "constant": true,

        "inputs": [],

        "name": "owner",

        "outputs": [

            {

                "name": "",

                "type": "address"

            }

        ],

        "payable": false,

        "stateMutability": "view",

        "type": "function"

    }
];