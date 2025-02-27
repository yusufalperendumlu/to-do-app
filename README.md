# Modern Todo Uygulaması

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir todo uygulamasıdır.

## Kullanılan Teknolojiler

### Frontend
- **Next.js** - React framework'ü
- **TypeScript** - Tip güvenliği için
- **Tailwind CSS** - Stil ve tasarım için
- **Zustand** - State yönetimi için
- **@formkit/auto-animate** - Animasyonlar için

### Backend
- **Next.js API Routes** - Backend API'leri için
- **Prisma** - Veritabanı ORM'i

## Özellikler

1. **Todo İşlemleri**
   - Todo ekleme
   - Todo silme
   - Todo düzenleme
   - Todo'ları listeleme

2. **Kullanıcı Deneyimi**
   - Hover efektleri
   - Animasyonlu geçişler
   - Düzenleme modu
   - Responsive tasarım

3. **State Yönetimi**
   - Merkezi state yönetimi (Zustand)
   - TypeScript ile tip güvenliği
   - Optimistik UI güncellemeleri

## Teknik Detaylar

### State Yönetimi
- Zustand kullanılarak merkezi bir store oluşturuldu
- Todo'ların durumu ve işlemleri store üzerinden yönetiliyor

### Komponentler
- **TodoList**: Ana komponent, todo listesini yönetir
- **TodoItem**: Her bir todo öğesini render eder
- **AddTodo**: Yeni todo ekleme ve düzenleme işlemlerini yönetir

### API Yapısı
- RESTful API prensipleri
- Next.js API Routes ile backend işlemleri
- Prisma ile veritabanı işlemleri

### Animasyonlar
- @formkit/auto-animate ile liste animasyonları
- Hover efektleri için Tailwind transitions
- Smooth geçişler

## Kurulum

1. Projeyi klonlayın

  ```
  git clone https://github.com/yourusername/to-do-app/
  ```

2. Bağımlılıkları yükleyin

   ```
   npm install
   ```
   or
   ```
   yarn
   ```

   
3. .env dosyasını oluşturun

  ```
  DATABASE_URL="your-database-url"
  ```


4. Geliştirme sunucusunu başlatın

   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
