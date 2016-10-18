$(document).ready(function() {

    // using built in JS methods to determine strings are anagrams of each other
    var checkAnagram = function(str1, str2) {
        return str1.split("").sort().join("") === str2.split("").sort().join("");
    };

    // user checks for anagrams
    $('.checkAnagram').on('click', function(e) {
        // resetting values
        $('.owl').removeClass('owl-happy owl-sad');
        $('.ribbon').removeClass('ribbon-correct ribbon-wrong');
        $('.owl').addClass('owl-standard');
        e.preventDefault();
        // checking if no string is inputted
        if ($('#string1').val() === '') {
            $('#string1').addClass('error');
            if ($('#string2').val() === '') {
                $('#string2').addClass('error');
            }
            $('.result').empty();
            $('.result').hide();
        } else {
            $('#string1').removeClass('error');
            if ($('#string2').val() === '') {
                $('#string2').addClass('error');
                $('.result').empty();
                $('.result').hide();
            } else {
                $('#string2').removeClass('error');
                var isAnagram = checkAnagram($('#string1').val(), $('#string2').val());
                if (isAnagram === true) {
                    $('.ribbon').addClass('ribbon-correct');
                    $('.owl').removeClass('owl-standard owl-sad');
                    $('.owl').addClass('owl-happy');
                    $('.result').empty().html("Huzzah!");
                    $('.more-result').empty().html("<b>" + $('#string1').val() + "</b> and <b>" + $('#string2').val() + "</b> are anagrams of each other");
                } else if (isAnagram === false) {
                    $('.ribbon').addClass('ribbon-wrong');
                    $('.owl').removeClass('owl-standard owl-happy');
                    $('.owl').addClass('owl-sad');
                    $('.result').empty().append("Nope");
                    $('.more-result').empty().html("<b>" + $('#string1').val() + "</b> and <b>" + $('#string2').val() + "</b> are not anagrams of each other");
                }
                // show results
                $('.result').show();
                // clear string values
                $('#string1').val('');
                $('#string2').val('');
            }
        }
    });

    $('.reset').on('click', function(e) {
        e.preventDefault();
        $('.owl').removeClass('owl-happy owl-sad');
        $('.ribbon').removeClass('ribbon-correct ribbon-wrong');
        $('.owl').addClass('owl-standard');
        $('#string1').val('');
        $('#string2').val('');
        $('.result').text("Are these two strings anagrams of each other?");
        $('.more-result').text("Let's find out!");
    });
});
