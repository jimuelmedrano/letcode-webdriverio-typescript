Feature: Letcode Dropdown Page

    @dropdown
    Scenario Outline: As a user, I can select an option using visible text

        Given I am on letcode workspace page
        When I click dropdown page
        And I click the first drop down and select the option: <option>
        Then I should be able to verify that the selected option is <option>

        Examples:
            | option |
            | Mango  |
            | Banana |