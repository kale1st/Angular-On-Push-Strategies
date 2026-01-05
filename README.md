# Product Dashboard – OnPush Change Detection Strategy Demo

This project demonstrates **Angular's OnPush change detection strategy** in a practical Product Dashboard scenario.

---

## 📋 Scenario: Product Inventory Management

This app has **two main sections**:

### 1️⃣ Stock Tracker (Left Panel)
- Displays the current stock level  
- `Add Stock` button to increase stock  
- `Remove Stock` button to decrease stock  
- Uses the **StatusBadge** subcomponent to display stock status  

### 2️⃣ Inventory Management (Right Panel)
- Displays the product list  
- Contains a form to add new products  
- Uses **ChangeDetectionStrategy.OnPush**  

---

## 🔍 Exploring How OnPush Works

Open the browser’s **Developer Tools → Console** and test these scenarios:

### Scenario 1: Using Stock Tracker
1. Click `Add Stock` in Stock Tracker  
2. You will see `[StockTracker]` and `[StatusBadge]` logs in console  
3. **BUT**: You **won’t see** `[InventoryComponent]` or `[InventoryList]` logs  
   ➜ Why? OnPush ensures that unrelated components don’t re-evaluate unless their own **Input changes** or an event occurs.

### Scenario 2: Adding a New Product
1. Type in the form fields of Inventory Management  
2. `[AddProduct]` log appears  
3. **BUT**: `[InventoryList]` log **does not appear** (AddProduct uses OnPush)  
4. Click `Add Product` button  
5. Now `[InventoryList]` log appears  
   ➜ Why? The **@Input() productList** changed, which triggers OnPush re-evaluation.

### Scenario 3: Independence Between Stock & Inventory
1. Click buttons in Stock Tracker  
2. Inventory Management should **not update**  
3. Type and add a product in Inventory Management  
4. Stock Tracker should **not update**  
   ➜ OnPush ensures these two sections are fully independent!

---

## 📁 Project Structure

<img width="353" height="230" alt="image" src="https://github.com/user-attachments/assets/0136dc65-62ac-47fd-8cd4-119d44a79430" />



---

## 🎯 Benefits of OnPush

- **Performance:** Reduces unnecessary change detection cycles  
- **Predictability:** Only updates when Inputs change or an event occurs  
- **Independence:** Prevents unrelated components from affecting each other  
- **Scalability:** Significant performance gains in large applications  

---

## ⚙️ How to Run

```bash
# Go to project folder
cd product-dashboard

# If Angular project is not initialized
ng new . --skip-git

# Start the development server
ng serve
