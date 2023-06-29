Feature: Letcode Drag and Drop Page

    @regression @dragdrop
    Scenario Outline: As a user, I can drag and drop the draggable box to droppable box

        Given I am on letcode workspace page
        When I click drag and drop page
        And I drag and drop the box
        Then I should be able to verify that box has been moved

        Examples:
            ||
            ||