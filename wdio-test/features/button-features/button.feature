Feature: Letcode Button Page

    @button
    Scenario Outline: As a user, I can click home button and go back using driver navigation

        Given I am on letcode workspace page
        When I click button page
        And I click home button inside button page
        And I go back to the previous page using driver navigation
        Then I should be inside the button page

        Examples:
            ||
            ||

