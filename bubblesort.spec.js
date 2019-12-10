describe('Bubble Sort', function(){
    beforeEach(() => {
        const sortedArray = bubbleSort([5,7,2,6,1])
        spyOn(Array.prototype.sort())
    })
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an array', function(){
        expect( bubbleSort([5,7,2,6,1]) ).toEqual( [1,2,5,6,7] );
    });
    it('do not use .sort()', function(){
        expect(sort().toNotHaveBeenCalled())
    });
    it('has a swapCounter', function(){
        expect(swapCounter).toEqual(100)
    });
  });
