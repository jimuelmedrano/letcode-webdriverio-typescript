Feature: Letcode Slider Page

    @regression @slider
    Scenario Outline: As a user, I can slide the slider and generate countries

        Given I am on letcode workspace page
        When I click slider page
        And I slide the slider 
        And I click get countries button
        Then I validate that country count is same as slider count

        Examples:
            |  |
            |  |