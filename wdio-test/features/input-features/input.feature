Feature: Letcode Input Page

    @regression @input
    Scenario Outline: As a user, I can input full name in the text field

        Given I am on letcode workspace page
        When I click input page
        And I input first name <firstName> and last name <lastName> in the text field
        Then The first input field text should be equal to the combination of <firstName> and <lastName>

        Examples:
            | firstName    | lastName |
            | Jimuel Renzo | Medrano  |

    @regression @input
    Scenario Outline: As a user, I can append text in the field and press tab

        Given I am on letcode workspace page
        When I click input page
        And I append the text: `<append>` inside the input field and press tab
        Then The second input field text should include the appended text: `<append>`

        Examples:
            | append        |
            | at automation |

    @regression @input
    Scenario Outline: As a user, I can verify the text inside the input field

        Given I am on letcode workspace page
        When I click input page
        Then The third input field text should include the text: `<text>`

        Examples:
            | text     |
            | ortonikc |

    @regression @input
    Scenario Outline: As a user, I can clear the text inside the input field

        Given I am on letcode workspace page
        When I click input page
        And I clear the text of the fourth input field
        Then The fourth input field text should be blank after clearing the value

        Examples:
            ||
            ||

    @regression @input
    Scenario Outline: As a user, I can verify that the input field is disabled

        Given I am on letcode workspace page
        When I click input page
        Then The fifth input field text should be disabled

        Examples:
            ||
            ||

    @regression @input
    Scenario Outline: As a user, I can verify that the input field is read only

        Given I am on letcode workspace page
        When I click input page
        Then The sixth input field text should be read only

        Examples:
            ||
            ||