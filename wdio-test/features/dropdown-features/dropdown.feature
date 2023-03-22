Feature: Letcode Dropdown Page

    @dropdown
    Scenario Outline: As a user, I can select an option using visible text

        Given I am on letcode workspace page
        When I click dropdown page
        And I click the first dropdown and select the option: <option>
        Then I should be able to verify that the selected option is <option>

        Examples:
            | option |
            | Mango  |
            | Banana |

    @dropdown
    Scenario Outline: As a user, I can select multiple options

        Given I am on letcode workspace page
        When I click dropdown page
        And I get and print all the options of second dropdown
        Then I should be able to select the following options: <options>

        Examples:
            | options                           |
            | Spider-Man, Batman, Black Panther |