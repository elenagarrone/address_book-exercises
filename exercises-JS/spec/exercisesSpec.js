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

  describe('The function string.camelCase takes a string like:', function(){
    it("'your soul is mine' and returns 'yourSoulIsMine'", function(){
      expect('your soul is mine'.camelCase()).toEqual('yourSoulIsMine');
    })

    it("' Get over   here! ' and returns 'getOverHere!'", function(){
      expect(' Get over   here! '.camelCase()).toEqual('getOverHere!');
    })

  })
})
