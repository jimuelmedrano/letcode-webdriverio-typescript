Feature: Letcode Input Full Name

    @input
    Scenario Outline: As a user, I can input full name in the text field

        Given I am on letcode workspace page
        When I click input edit button
        And I input first name <firstName> and last name <lastName> in the text field
        Then The current text should be equal to the combination of <firstName> and <lastName>

        Examples:
            | firstName    | lastName |
            | Jimuel Renzo | Medrano  |
