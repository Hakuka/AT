### login

Verify that the user can login to the application. Four cases are tested:

- Standard user (correct username and password) – login successful
- Standard user (correct username and incorrect password) – login denied
- Standard user (incorrect username and correct password) – login denied
- Locked user (correct username and password) – login denied

<details>
  <summary>Test case for login scenario</summary>

| Lp. | Step description| Expected result|
| --- | --- | --- |
| 0.  | Preconditions: <br>- User U1 with known login (e.g., "UserJohn"), password (e.g., "SuperPass") and access to website (user is not banned, doesn't have restricted access etc.) exist. <br>- User U2 with known login (e.g., "UserLocked"), password (e.g., "LockPass") and locked access to system exist. | Preconditions are met.|
| 1.  | Open login page and enter correct username and password for user U1.| Username and password are entered, password is displayed as string of "\*" instead of visible characters.                                 |
| 2.  | Press "Login" button.| User is correctly logged to the system. Inventory view is displayed.|
| 3.  | Press menu button (located in the top-left corner).| Menu with "Logout" option is displayed.|
| 4.  | Press "Logout" button.| User is correctly logged out from the system. Login page is displayed correctly.|
| 5.  | Enter correct username but wrong password (e.g., "xxxx") for user U1.| Username and password are entered, password is displayed as string of "\*" instead of visible characters.|
| 6.  | Press "Login" button.| User is not logged to the system. Error message is displayed: "Epic sadface: Username and password do not match any user in this service" |
| 7.  | Reload page| Login page is visible, error message is no longer visible.|
| 8.  | Enter a username other than user U1 (e.g., "UserJenny") and enter the correct password for user U1 (note: the password does not correspond to the entered username).| Username and password are entered, password is displayed as string of "\*" instead of visible characters.|
| 9.  | Press "Login" button.| User is not logged to the system. Error message is displayed: "Epic sadface: Username and password do not match any user in this service" |
| 10. | Reload page| Login page is visible, error message is no longer visible.|
| 11. | Enter correct username and password for user U2.| Username and password are entered, password is displayed as string of "\*" instead of visible characters.                                 |
| 12. | Press "Login" button.| User is not logged to the system. Error message is displayed: "Epic sadface: Sorry, this user has been locked out."|

</details>

### product-List

Verify that the product list is displayed correctly based on the following criteria:

- Product list is available on /inventory.html after login
- Each product has a unique photo and name
- Each product has a price

Verify that product list have option to sort products with correct options.

### scenario-1 - purchase-happy-path

Basic scenario for buying products:

1. Login to app as standard user.
2. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
3. Go to the cart and verify that correct items were added with correct quantity.
4. Go to the checkout.
5. Enter first name, last name, zip/postal code and go to the checkout overview.
6. Verify added items and total price if it's correct.
7. Finish order and go back to the products page.

<details>
  <summary>Test case for purchase-happy-path scenario</summary>

| Lp. | Step description| Expected result|
| --- | --- | --- |
|0.| Preconditions: <br>- User U1 with known login (e.g., "UserJohn"), password (e.g., "SuperPass") and access to website (user is not banned, doesn't have restricted access etc.) exist. <br> - Two items are added to the system ("Sauce Labs Backpack" and "Sauce Labs Fleece Jacket") and are available to buy with known prices (for example corresponding prices 29.99 and 49.99)| Preconditions are met.|
|1.| Open login page and enter correct username and password for user U1.| Username and password are entered, password is displayed as string of "\*" instead of visible characters.|
|2.| Press "Login" button.| User is correctly logged to the system. Inventory view is displayed.|
|3.| Press "Add to cart" for "Sauce Labs Backpack" item| "Sauce Labs Backpack" is added to the cart. Icon indicator with amount of items in cart is displayed (red "1" in top right corner on the cart icon).
|4.| Repeat previous step for "Sauce Labs Fleece Jacket" | Both items are added to the cart. Icon indicator displays "2" this time.
|5.| Open cart view (cart icon located in top-right corner). | Cart view is displayed.|
|6.| Verify that both products from previous steps are added correctly with correct prices from preconditions ("Sauce Labs Backpack" - "29.99" and "Sauce Labs Fleece Jacket" - "49.99")| Both added items are correctly displayed|
|7.| Press "Checkout" button. | Checkout view is displayed.|
|8.| Enter checkout data (first name, last name, zip/postal code).| Data is correctly added to the form.|
|9.| Press "Continue" button. | Checkout: Overview view is displayed.|
|10.| Verify that all data is displayed correctly: items name, quantity of items, prices, tax, total costs. | All data is displayed correctly.|
|11.| Press "Finish" button. | Checkout: Complete! view is displayed.|
|12.| Press "Back Home" button.| Inventory view is displayed correctly. Cart indicator with amount of items added is no longer displayed.|

</details>

### scenario-2 - adding-removing-cart

1. Login to app as standard user.
2. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
3. Remove Sauce Labs Backpack.
4. Go to the cart and verify that correct items were added with correct quantity.
5. Remove Sauce Labs Fleece Jacket.
6. Move back to the product list.
7. Add Sauce Labs Backpack and Sauce Labs Fleece Jacket to the cart.
8. Go to the cart and verify that correct items were added with correct quantity and prices.

---

Note:

- Item and prices are stored in fixtures for easy change in the future.
- First name, last name and zip/postal code should be randomizes every time to avoid burning out tests (now they are not).
- One of existing tests WILL NOT pass because there is problem - it's OK (user with errors)
- Tests could (should imo) be reorganized to "support files per specific site" (POM?), since they are used in multiple test cases. Right now methods are added to the files supporting specific scenario.
- Product-list probably need refactoring to simplify code, few ideas/tests added and some part could be rewriten to use the same method.
