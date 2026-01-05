# Product Dashboard - OnPush Change Detection Strategy Demo

Bu proje, Angular'ın `OnPush` change detection stratejisini pratik olarak göstermek için tasarlanmıştır.

## 📋 Senaryo: Ürün Envanter Yönetimi

Bu uygulamada iki ana bölüm vardır:

### 1. **Stock Tracker** (Sol Panel)
- Mevcut stok miktarını gösterir
- "Add Stock" butonu ile stoku artırabilirsiniz
- "Remove Stock" butonu ile stoku azaltabilirsiniz
- Stok durumunu göstermek için **StatusBadge** alt komponenti vardır

### 2. **Inventory Management** (Sağ Panel)
- Ürün listesini gösterir
- Yeni ürün ekleme formunu içerir
- **ChangeDetectionStrategy.OnPush** kullanır

## 🔍 OnPush Stratejisinin Nasıl Çalıştığını İncelemek

Tarayıcının **Developer Tools → Console** sekmesini açıp şu senaryoları test edin:

### Senaryo 1: Stock Tracker'ı kullanırken
```
1. Stock Tracker'da "Add Stock" butonuna tıklayın
2. Console'da [StockTracker] ve [StatusBadge] loglarını görürsünüz
3. BUT: [InventoryComponent] ve [InventoryList] loglarını görmeyeceksiniz!
   ➜ Neden? OnPush stratejisi sayesinde, aynı bileşen ağacında bir olay yoksa
     diğer bölüm yeniden değerlendirilmez.
```

### Senaryo 2: Yeni ürün eklerken
```
1. Inventory Management'da form alanlarına yazı yazın
2. Console'da [AddProduct] logunu göreceksiniz
3. BUT: [InventoryList] logunu görmeyeceksiniz (AddProduct'te OnPush var)
4. "Add Product" butonuna tıklayın
5. Şimdi [InventoryList] logunu göreceksiniz!
   ➜ Neden? Input değişti (@Input() productList) ve bu OnPush ile 
     değişimi tetikler
```

### Senaryo 3: Stock ve Inventory arasındaki bağımsızlık
```
1. Stock Tracker'da tıklama yapın
2. Inventory Management hiç değişmemeli
3. Inventory'de form yazın ve ürün ekleyin
4. Stock Tracker hiç değişmemeli
   ➜ OnPush sayesinde bu iki bölüm tamamen bağımsız!
```

## 📁 Proje Yapısı

```
src/app/
├── app.component.ts                    (OnPush YOK - kök component)
├── stock-tracker/
│   └── stock-tracker.component.ts      (OnPush YOK)
│   └── status-badge.component.ts       (OnPush VAR - @Input ile)
└── inventory/
    ├── inventory.component.ts          (OnPush VAR)
    ├── add-product/
    │   └── add-product.component.ts    (OnPush VAR)
    └── inventory-list/
        └── inventory-list.component.ts (OnPush VAR - @Input ile)
```

## 🎯 OnPush'un Faydaları

1. **Performance**: Gereksiz change detection döngülerini azaltır
2. **Tahmini**: Input değişirse veya event olursa update olur
3. **Bağımsızlık**: İlişkisiz bileşenlerin birbirini etkilemesini engeller
4. **Skala**: Büyük uygulamalarda significant performance gain sağlar

## ⚙️ Nasıl Çalıştırılır

```bash
# Proje klasörüne gidin
cd product-dashboard

# Angular projesi ise init edin
ng new . --skip-git

# Serveri başlatın
ng serve

# Browser'da açın
http://localhost:4200
```

## 📝 Makale için Açıklamalar

### OnPush Ne Zaman Kullanılmalı?

✅ Kullanın:
- Data-driven uygulamalar
- Input değişikleri seyrek olduğunda
- Büyük bileşen ağaçları
- Performance-critical uygulamalar

❌ Kullanmayın:
- Basit uygulamalar
- İçişi event binding'ler (two-way binding)
- Zamanlayıcı ve observable'lar (manuel trigger gerekir)

### OnPush'un Sınırlamaları

- Observable veya setInterval kullanıyorsanız CD manuel olarak tetiklenmeli
- Parent → Child flow'a uygundur (two-way binding'te sorunlu)
- Debugging zor olabilir

---

**Medium yazısı için bu proje tam bir demo olarak hizmet edebilir!**
