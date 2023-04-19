Feature: Letcode Frame Page

    @regression @frame
    Scenario Outline: As a user, I can input full name and email in the text field

        Given I am on letcode workspace page
        When I click frame page
        And I go to frame and input first name <firstName> and last name <lastName> in the text field
        And The frame full name should be combination of <firstName> and <lastName>
        Then I should be able to input email: <email> in the inner html

        Examples:
            | firstName    | lastName | email          |
            | Jimuel Renzo | Medrano  | test@email.com |