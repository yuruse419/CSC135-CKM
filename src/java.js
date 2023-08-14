// I certify that the HTML file I am submitting is all my own work.
// None of it is copied from any source or any person.
// Signed: Keagan Haar. 

// Author: Keagan Haar
// Date: 08/13/2023
// Class: CSC135
// Project: Final
// Description: Final project.


// Start main function
function toggleMode() {
    // Page header color changes
    var PageHeaderContainer = document.getElementById("page-header-container")

        // adds/removes .light-color-scheme-color-one 
        PageHeaderContainer.classList.toggle('light-color-scheme-color-one')

        // adds/removes .dark-color-scheme-color-one 
        PageHeaderContainer.classList.toggle('dark-color-scheme-color-one')

    var PageFooterContainer = document.getElementById("page-footer-container")

        // adds/removes .light-color-scheme-color-one 
        PageFooterContainer.classList.toggle('light-color-scheme-color-one')

        // adds/removes .dark-color-scheme-color-one 
        PageFooterContainer.classList.toggle('dark-color-scheme-color-one')


    // Body color changes
    var Body = document.body

        Body.classList.toggle('light-color-scheme-color-two')

        Body.classList.toggle('dark-color-scheme-color-two')

        Body.classList.toggle('dark-text-color')

        Body.classList.toggle('light-text-color')

    
    // a color changing settings
    var Anchors = document.getElementsByTagName('a')

        for(let i = 0; i < Anchors.length; i++) {
          Anchors[i].classList.toggle('light-text-color')
          Anchors[i].classList.toggle('dark-text-color')
        }


    // Main Header Box color changes
    var MainHeaderContainer = document.getElementById("main-header-container")

        MainHeaderContainer.classList.toggle('light-color-scheme-color-two')

        MainHeaderContainer.classList.toggle('dark-color-scheme-color-two')


    // Main color changes
    var Main = document.getElementById("main")

        Main.classList.toggle('light-color-scheme-color-one')

        Main.classList.toggle('dark-color-scheme-color-one')


    // Form color changes
    var Form = document.getElementById("form")

        Form.classList.toggle('light-color-scheme-color-two')

        Form.classList.toggle('dark-color-scheme-color-two')


    // Name color changes
    var Name = document.getElementById("name")
        
        Name.classList.toggle('light-color-scheme-color-two')

        Name.classList.toggle('dark-color-scheme-color-three')


    // Email color changes
    var Email = document.getElementById("email")

        Email.classList.toggle('light-color-scheme-color-two')

        Email.classList.toggle('dark-color-scheme-color-three')


    // Phone color changes
    var Phone = document.getElementById("phone")
        
        Phone.classList.toggle('light-color-scheme-color-two')

        Phone.classList.toggle('dark-color-scheme-color-three')


    // Address color changes
    var Address = document.getElementById("address")

        Address.classList.toggle('light-color-scheme-color-two')

        Address.classList.toggle('dark-color-scheme-color-three')


    // Questions color changes
    var Questions = document.getElementById("questions")

        Questions.classList.toggle('light-color-scheme-color-two')

        Questions.classList.toggle('dark-color-scheme-color-three')


    // Button color changes
    var Button = document.getElementById("color-mode-btn")

        Button.classList.toggle('light-text-color')

        Button.classList.toggle('dark-text-color')

        Button.classList.toggle('dark-color-scheme-color-two')

        Button.classList.toggle('light-color-scheme-color-two')

}
