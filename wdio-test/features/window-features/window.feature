Feature: Letcode Window Page

    @regression @window
    Scenario Outline: As a user, I can print the title of new window

        Given I am on letcode workspace page
        When I click window page
        And I click open home page button
        Then I print the title of new window

        Examples:
            |  |
            |  |