const _20200904192556_create_campos = require("./20200904192556-create-campos")
// @ponicode
describe("_20200904192556_create_campos.up", () => {
    test("0", () => {
        let callFunction = () => {
            _20200904192556_create_campos.up({ createTable: () => "bc23a9d531064583ace8f67dad60f6bb" }, { INTEGER: true, STRING: "foo bar", DATE: "01-01-2030" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20200904192556_create_campos.up({ createTable: () => 9876 }, { INTEGER: false, STRING: "\"#'{7855663]}ééàà", DATE: "01-13-2020" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20200904192556_create_campos.up({ createTable: () => "da7588892" }, { INTEGER: true, STRING: "foo bar", DATE: "01-01-2020" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20200904192556_create_campos.up({ createTable: () => 12345 }, { INTEGER: false, STRING: "p", DATE: "01-01-2030" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20200904192556_create_campos.up({ createTable: () => "bc23a9d531064583ace8f67dad60f6bb" }, { INTEGER: false, STRING: "foo bar", DATE: "01-13-2020" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20200904192556_create_campos.up(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_20200904192556_create_campos.down", () => {
    test("0", () => {
        let callFunction = () => {
            _20200904192556_create_campos.down({ dropTable: () => "Expressway" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20200904192556_create_campos.down({ dropTable: () => "Port" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20200904192556_create_campos.down({ dropTable: () => "Extensions" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20200904192556_create_campos.down({ dropTable: () => "Lights" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20200904192556_create_campos.down({ dropTable: () => "Harbors" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20200904192556_create_campos.down(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
