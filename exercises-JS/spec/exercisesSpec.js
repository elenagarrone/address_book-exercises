describe('camelCase', function(){

  describe('Takes a string like:', function(){
    it("'your soul is mine' and returns 'yourSoulIsMine'", function(){
      expect(camelCase('your soul is mine')).toEqual('yourSoulIsMine');
    })

    it("' Get over   here! ' and returns 'getOverHere!'", function(){
      expect(camelCase(' Get over   here! ')).toEqual('getOverHere!');
    })

  })
})
