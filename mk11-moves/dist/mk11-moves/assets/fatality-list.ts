export class FatalityList {

//   1 is A, 2 is B, 3 is X, 4 is Y....b, f, d, u is back, down, forward, up

    constructor() {}
   
    fatalities = {
        'baraka': {
            'fatality1': {
                'name': 'food for thought',
                'move': ['b', 'd', 'b', 4],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'cassie cage': {
            'fatality1': {
                'name': 'i <3 u',
                'move': ['d', 'd', 'f', 2],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'cetrion': {
            'fatality1': {
                'name': 'maintaining balance',
                'move': ['b', 'd', 'f', 'd', 2],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'dvorrah': {
            'fatality1': {
                'name': 'new species',
                'move': ['b', 'f', 'b', 1],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'erron black':{
            'fatality1': {
                'name': 'melted',
                'move': ['d', 'd', 'd', 3],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'geres': {
            'fatality1': {
                'name': 'phasing through time',
                'move': ['b', 'd', 'd', 1],
                'range': 'any'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'jacqui briggs': {
            'fatality1': {
                'name': 'spider mines',
                'move': ['f', 'b', 'f', 1],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'jade': {
            'fatality1': {
                'name': 'bow before me',
                'move': ['d', 'd', 'f', 'd', 2],
                'range': 'any'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'jax briggs': {
            'fatality1': {
                'name': 'coming in hot',
                'move': ['f', 'd', 'f', 1],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'johnny cage': {
            'fatality1': {
                'name': "mr cage's neighborhood",
                'move': ['f', 'b', 'd', 'd', 2],
                'range': ''
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'kabal': {
            'fatality1': {
                'name': 'road rash',
                'move': ['b', 'f', 'd', 'f', 1],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'kano': {
            'fatality1': {
                'name': 'last dance',
                'move': ['f', 'd', 'd', 3],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'kitana': {
            'fatality1': {
                'name': 'gore-nado',
                'move': ['d','d','d','d',3],
                'range': ''
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'kollector': {
            'fatality1': {
                'name': 'for the kollection',
                'move': ['d','d','d','d',2],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'kotal kahn': {
            'fatality1': {
                'name': 'totem sacrifice',
                'move': ['b','d','b',1],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'kung lao': {
            'fatality1': {
                'name': 'headed nowhere',
                'move': ['d','f','b','d',4],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'liu kang': {
            'fatality1': {
                'name': 'burn out',
                'move': ['d','b','d','f',3],
                'range': 'close'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'noob saibot': {
            'fatality1': {
                'name': 'split decision',
                'move': ['b','f','b','f',2],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'raiden': {
            'fatality1': {
                'name': 'alternating current',
                'move': ['b','d','b',3],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'scorpion': {
            'fatality1': {
                'name': "you're next",
                'move': ['b','d','d',3],
                'range': 'far'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'skarlet': {
            'fatality1': {
                'name': 'bloody mess',
                'move': ['f','b','d',1],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'sonya': {
            'fatality1': {
                'name': 'to the choppa',
                'move': ['d','f','b',4],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        },
        'sub-zero': {
            'fatality1': {
                'name': 'ice-cutioner',
                'move': ['b','f','b',4],
                'range': 'mid'
            },
            'fatality2': {
                'name': '',
                'move': [],
                'range': ''
            },
        }
    }

    getFatalityList(char:any) {
        switch(char) {
            case 'baraka':
                return this.fatalities.baraka;
            case 'cassie cage':
                return this.fatalities["cassie cage"]
            case 'cetrion':
                return this.fatalities['cetrion']
            case 'dvorrah':
                return this.fatalities.dvorrah
            case 'erron black':
                return this.fatalities["erron black"]
            case 'geres':
                return this.fatalities.geres
            case 'jacqui briggs':
                return this.fatalities["jacqui briggs"]
            case 'jade':
                return this.fatalities.jade
            case 'jax briggs':
                return this.fatalities["jax briggs"]
            case 'johnny cage':
                return this.fatalities["johnny cage"]
            case 'kabal':
                return this.fatalities.kabal
            case 'kano':
                return this.fatalities.kano
            case 'kitana':
                return this.fatalities.kitana
            case 'kollector':
                return this.fatalities.kollector
            case 'kotal kahn':
                return this.fatalities["kotal kahn"]
            case 'kung lao':
                return this.fatalities["kung lao"]
            case 'liu kang':
                return this.fatalities["liu kang"]
            case 'noob saibot':
                return this.fatalities["noob saibot"]
            case 'raiden':
                return this.fatalities.raiden
            case 'scorpion':
                return this.fatalities.scorpion
            case 'skarlet':
                return this.fatalities.skarlet
            case 'sonya':
                return this.fatalities.sonya
            case 'sub-zero':
                return this.fatalities["sub-zero"]
            default:
                return ''
        } 
    }
}
