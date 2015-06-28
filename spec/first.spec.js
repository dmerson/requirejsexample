describe("Expect",function(){
    describe("true",function(){
        it("isequalto",function(){
            expect(true).toEqual(true);
        })
    });
    describe("awesome function",function(){
        it("has to be called",function(){
            var thisIs={
                awesome:function(){
                    console.log("AWESOME!");
                }
            }
            spyOn(thisIs,"awesome");
            var x=thisIs.awesome();
            expect(thisIs.awesome).toHaveBeenCalled();
        })
    });
});
