// display content in calc screen
function display(content){
    result.value+=content
}
function acbutton(){
    result.value=""
}
function calculate(){
    try{
        result.value=eval(result.value)

    }
    catch{
        result.value="ERROR!!!"
    }
}
function delbutton(){
    result.value=result.value.slice(0,-1)
}