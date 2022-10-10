let answer=document.getElementById('answer')
//function to contatenate values entered and display in the calculator screen
function display(number){
    answer.value+=number
}
//function to execute when 'C' is clicked
function allClear(){
    answer.value="";
}
// function to execute when 'backspace is clicked'
function erase(){
    //slice() is an array method that slices the array.Here it slices leaving the last array value and returns the remaining array
    answer.value=answer.value.slice(0,-1)
}
//function to execute when'=' is clicked
function result(){
    //try method runs the code and executes if there is no exception(error)
    try{
        //eval() function evaluates the expression in the calculator screen
        answer.value=eval(answer.value)
    }
    //catch executes if there is an exception
    catch
    {
        //This alert message pops up if the input expression is invalid
        alert('Invalid Input');
    }
}