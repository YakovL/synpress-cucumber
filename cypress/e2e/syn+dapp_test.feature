Feature: Test of Synpress and Metamask with a DApp from a tutorial

    Trivial scenario for a test app

        Scenario: Open, connect, confirm

            Given we're on the test dapp page
            When we press connect
            When we accept notification
            Then the button should say Connected
            When we press Sign on the Personal Sign card
            And we confirm signing
            Then something should happen