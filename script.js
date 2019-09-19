jQuery(function($) {
    $('#word').change(function() {
        let word = $(this).val(),
            $output = $('#output');
        
        if (word) {
            let palindrome = verifyWord(word);
            if (palindrome) {
                $output.text('Congratulations! Your word is a Palindrome.');       
            } else {
                $output.text('Sorry! Your word is NOT a Palindrome.'); 
            }
        } else {
            $output.text('');
        }
    });
    
    function verifyWord(word) {
        let reverse = reverseString(word);
        
        if (word == reverse) {
          return true;
        }
        return false;
    }
    
    function reverseString(str) {
        let splitString = str.split(""), 
            reverseString = splitString.reverse(),
            joinString = reverseString.join('');
        
        return joinString;
    }
});
