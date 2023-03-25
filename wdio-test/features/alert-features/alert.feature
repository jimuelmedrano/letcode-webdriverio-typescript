Feature: Letcode Alert Page

    @regression @alert
    Scenario Outline: As a user, I can click home button and go back using driver navigation

        Given I am on letcode workspace page
        When I click alert page
        And I click the first sample alert
        Then I should be able to accept the alert

        Examples:
            ||
            ||