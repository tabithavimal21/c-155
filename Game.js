AFRAME.registerComponent("game-play",{
    schema:{
            elementId:{
                type:"string",
                default:"#ring1"
            }
    },

    update:function(){
        this.isCollided(this.data.elementId)
    },

    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collide",(p)=>{
            if (elementId.includes("#ring"))
            {
                console.log(elementId+" collison ")
            }
            else if (elementId.includes("#hurdle")){
                console.log(elementId+"collison")
            }
        })
    }

})