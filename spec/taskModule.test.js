describe("the Task Module",function(){
    describe("add function",function(){
        it("calls taskRenderer.renderNew",function(done){

            define("renderers/taskRenderer",[],function(){
                return {
                    renderNew:function(){

                    }
                };
            });
            define("data/taskData",[],function(){
                return {};
            })

            require(["tasks","renderers/taskRenderer"],function(tasks,taskRenderer){
                spyOn(taskRenderer,"renderNew");
                tasks.add();
                expect(taskRenderer.renderNew).toHaveBeenCalled();
                done();
            },function(error){
                done.error(error);
            });
        })
    })
})
