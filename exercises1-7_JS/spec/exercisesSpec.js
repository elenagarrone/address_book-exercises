describe('Exercise1', function(){

  describe('The function camelCase(string) takes a string like:', function(){

    it("'your soul is mine' and returns 'yourSoulIsMine'", function(){
      expect(camelCase('your soul is mine')).toEqual('yourSoulIsMine');
    })

    it("' Get over   here! ' and returns 'getOverHere!'", function(){
      expect(camelCase(' Get over   here! ')).toEqual('getOverHere!');
    })

  })
})

describe('Exercise2', function(){

  describe('The function string.camelCase() takes a string like:', function(){

    it("'your soul is mine' and returns 'yourSoulIsMine'", function(){
      expect('your soul is mine'.camelCase()).toEqual('yourSoulIsMine');
    })

    it("' Get over   here! ' and returns 'getOverHere!'", function(){
      expect(' Get over   here! '.camelCase()).toEqual('getOverHere!');
    })

  })
})

describe('Exercise3', function(){

  describe("A function 'sum' that wraps around 'masterSum' and passes its arguments on to 'masterSum so that:'", function(){

    it('sum(1,2,3,4,5,6) returns 21', function(){
      expect(sum(1,2,3,4,5,6)).toEqual(21)
    })

  })

})

describe('Exercise4', function(){

  describe('The function "masterSum()" rewritten using the reduce method', function(){

    it('masterSum(1,2,3,4,5,6) returns 21', function(){
      expect(masterSum(1,2,3,4,5,6)).toEqual(21)
    })

  })

})

describe('Exercise5', function(){

  describe('Given the object "Hero" the output is', function(){

    it('"100" when calling Hero.getLife()', function(){
      expect(Hero.getLife()).toEqual(100)
    })

  })

})

describe('Exercise6', function(){

  describe('Given the object "Hero" and using the method bind() the output is', function(){

    it('"100" when calling the LinksLife() ', function(){
      expect(LinksLife()).toEqual(100)
    })

  })

})
