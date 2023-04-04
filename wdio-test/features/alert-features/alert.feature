Feature: Letcode Alert Page

    @regression @alert
    Scenario Outline: As a user, I can click the sample alert and accept the alert

        Given I am on letcode workspace page
        When I click alert page
        And I click the first sample alert
        Then I should be able to accept the alert

        Examples:
            |  |
            |  |

    @regression @alert
    Scenario Outline: As a user, I can click the sample alert and dismiss the alert

        Given I am on letcode workspace page
        When I click alert page
        And I click the second sample alert
        And I print the alert message
        Then I should be able to dismiss the alert

        Examples:
            |  |
            |  |

    @regression @alert
    Scenario Outline: As a user, I can click the sample alert and input text in the alert

        Given I am on letcode workspace page
        When I click alert page
        And I click the third sample alert
        And I add text to alert: <text>
        Then I should be able to accept the alert
        Then I should be able to verify that the alert text is <text>

        Examples:
            | text  |
            | Renzo |

    @regression @alert
    Scenario Outline: As a user, I can click the open sweet alert and print its message

        Given I am on letcode workspace page
        When I click alert page
        And I click the last sample alert
        And I print the sweet alert message
        Then I should be able to close the sweet alert message

        Examples:
            | text  |
            | Renzo |