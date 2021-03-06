function doMultipleChoiceWithComments(qID,when)
{
  var question=$("#question"+qID+" .subquestions-list");
  if (jQuery.inArray(when, ['checked','unchecked'])<0){when='checked'}
  if(!question) return;

  if(when=='checked')
  {
    question.on('click','input.checkbox',function(event){
      var commentinput=$("#answer"+$(this)[0].name+"comment");
      if(!$(this)[0].checked){
        commentinput.val("");
        commentinput.triggerHandler("keyup");
      }else{
        commentinput.focus();
      }
    });
    question.on('keyup focusout',':not(.other-item) input.text',function(event){
      var checkboxinput=$("#answer"+$(this)[0].name.replace("comment",""));
      if($(this)[0].value==""){
        checkboxinput[0].checked=false;
      }else{
        checkboxinput[0].checked=true;
      }
      checkboxinput.triggerHandler("click");
    });
    question.on('focusout','.other-item .comment input.text',function(event){
      var otherinput=$("#answer"+$(this)[0].name.replace("comment",""));
      if($(this)[0].value==""){
        otherinput.val("");
        otherinput.triggerHandler("keyup");
      }
      else if($(this)[0].value!="" && otherinput.val()==""){
        otherinput.focus();
      }
    });
    question.on('focusout','.other-item .option input.text',function(event){
      var commentinput=$("#answer"+$(this)[0].name+"comment");
      console.log($(this)[0].value);
      if($(this)[0].value==""){
        commentinput.val("");
        commentinput.triggerHandler("keyup");
      }
      else if(commentinput.val()==""){
        commentinput.focus();
      }
    });
  }

  if(when=='unchecked')
  {
    question.on('click','input.checkbox',function(event){
      var commentinput=$("#answer"+$(this)[0].name+"comment");
      if($(this)[0].checked){
        commentinput.val("");
        commentinput.triggerHandler("keyup");
      }else{
        commentinput.focus();
      }
    });
    question.on('keyup focusout',':not(.other-item) input.text',function(event){
      var checkboxinput=$("#answer"+$(this)[0].name.replace("comment",""));
      if(!$(this)[0].value==""){
        checkboxinput[0].checked=false;
      }else{
        //checkboxinput[0].checked=true;
      }
      checkboxinput.triggerHandler("click");
    });
    question.on('focusout','.other-item .comment input.text',function(event){
      var otherinput=$("#answer"+$(this)[0].name.replace("comment",""));
      if(!$(this)[0].value==""){
        otherinput.val("");
        otherinput.triggerHandler("keyup");
      }
      else if($(this)[0].value!="" && otherinput.val()==""){
        otherinput.focus();
      }
    });
    question.on('focusout','.other-item .option input.text',function(event){
      var commentinput=$("#answer"+$(this)[0].name+"comment");
      console.log($(this)[0].value);
      if(!$(this)[0].value==""){
        commentinput.val("");
        commentinput.triggerHandler("keyup");
      }
      else if(commentinput.val()==""){
        commentinput.focus();
      }
    });
  }

}
