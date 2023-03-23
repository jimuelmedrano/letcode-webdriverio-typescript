Feature: Letcode Button Page

    @regression @button
    Scenario Outline: As a user, I can click home button and go back using driver navigation

        Given I am on letcode workspace page
        When I click button page
        And I click home button inside button page
        And I go back to the previous page using driver navigation
        Then I should be inside the button page

        Examples:
            ||
            ||

    @regression @button
    Scenario Outline: As a user, I can get the coordinates of the button

        Given I am on letcode workspace page
        When I click button page
        Then I should be able to get the coordinates of the second button

        Examples:
            ||
            ||
    
    @regression @button
    Scenario Outline: As a user, I can get the color of the button

        Given I am on letcode workspace page
        When I click button page
        Then I should be able to get the color of the third button

        Examples:
            ||
            ||

    @regression @button
    Scenario Outline: As a user, I can get the size of the button

        Given I am on letcode workspace page
        When I click button page
        Then I should be able to get the size of the fourth button

        Examples:
            ||
            ||

    @regression @button
    Scenario Outline: As a user, I can verify if the button is disabled

        Given I am on letcode workspace page
        When I click button page
        Then I should be able to verify if the fifth button is disabled

        Examples:
            ||
            ||

    @regression @button
    Scenario Outline: As a user, I can click and hold the button

        Given I am on letcode workspace page
        When I click button page
        Then I can click and hold the sixth button for 3 seconds

        Examples:
            ||
            ||