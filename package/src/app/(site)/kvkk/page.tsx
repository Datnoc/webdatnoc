import { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'KVKK Uyumluluğu - datnoc',
  description: 'Kişisel Verilerin Korunması Kanunu (KVKK) uyumluluk bilgileri.',
}

const KVKKPage = () => {
  return (
    <>
      <Breadcrumb pageName="KVKK Uyumluluğu" />
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-white text-48 font-bold mb-8'>KVKK Uyumluluğu</h1>
            
            <div className='space-y-8 text-muted/80 text-18'>
              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Genel Bakış</h2>
                <p>
                  datnoc, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerin 
                  korunmasına büyük önem vermektedir. Şirketimiz, kişisel verilerin işlenmesi, saklanması ve 
                  güvenliğinin sağlanması konusunda yasal yükümlülüklerini titizlikle yerine getirmektedir.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Temel İlkelerimiz</h2>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Hukuka ve dürüstlük kurallarına uygun işleme</li>
                  <li>Doğru ve gerektiğinde güncel tutma</li>
                  <li>Belirli, açık ve meşru amaçlar için işleme</li>
                  <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma</li>
                  <li>İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza etme</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Haklarınız</h2>
                <p className='mb-4'>KVKK uyarınca sahip olduğunuz haklar:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li><strong>Bilgi talep etme:</strong> Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li><strong>Erişim:</strong> İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li><strong>Düzeltme:</strong> Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li><strong>Silme:</strong> Kanuni süreler dolmuşsa silinmesini veya yok edilmesini isteme</li>
                  <li><strong>İtiraz:</strong> İşlenmesine itiraz etme</li>
                  <li><strong>Şikayet:</strong> Kişisel Verileri Koruma Kurumuna şikayet etme</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Veri İşleme Amaçları</h2>
                <p className='mb-4'>
                  Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Güvenlik hizmetleri ve danışmanlık hizmetlerinin sunulması</li>
                  <li>Müşteri taleplerinin ve sorularının yanıtlanması</li>
                  <li>Yasal ve düzenleyici yükümlülüklerin yerine getirilmesi</li>
                  <li>Hizmetlerimizin geliştirilmesi ve iyileştirilmesi</li>
                  <li>Pazarlama ve iletişim faaliyetleri (rızanız dahilinde)</li>
                  <li>İş ilişkilerinin yönetilmesi ve sözleşme yükümlülüklerinin yerine getirilmesi</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Veri Güvenliği</h2>
                <p className='mb-4'>
                  Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirler alınmaktadır:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Veri şifreleme (aktarım ve depolama sırasında)</li>
                  <li>Çok faktörlü kimlik doğrulama ve erişim kontrolleri</li>
                  <li>Düzenli güvenlik değerlendirmeleri ve penetrasyon testleri</li>
                  <li>Fiziksel güvenlik önlemleri ile korunan veri merkezleri</li>
                  <li>Personel eğitimleri ve farkındalık programları</li>
                  <li>Olay müdahale prosedürleri ve ihlal bildirim protokolleri</li>
                  <li>Güvenlik açığı yönetimi ve yamalama süreçleri</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Veri Saklama Süreleri</h2>
                <p>
                  Kişisel verileriniz, toplanma amaçlarının gerektirdiği süre boyunca veya yasal olarak öngörülen 
                  süreler boyunca saklanmaktadır. Bu süreler dolduğunda, verileriniz güvenli bir şekilde silinmekte 
                  veya anonimleştirilmektedir. Saklama süreleri, veri türü ve yasal gereklilikler doğrultusunda 
                  değişiklik göstermektedir.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Veri Paylaşımı</h2>
                <p className='mb-4'>
                  Kişisel verileriniz, yalnızca aşağıdaki durumlarda üçüncü kişilerle paylaşılmaktadır:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Açık rızanızın bulunduğu durumlar</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Hizmet sunumu için gerekli iş ortakları ve hizmet sağlayıcıları (KVKK uyumlu sözleşmeler ile)</li>
                  <li>Haklarımızın korunması ve güvenliğin sağlanması</li>
                </ul>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Aydınlatma Metni</h2>
                <p className='mb-4'>
                  Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için aydınlatma metnimizi inceleyebilirsiniz. 
                  Veri sorumlusu sıfatıyla, kişisel verilerinizin işlenmesi konusunda şeffaf ve açık bilgilendirme 
                  yapmaktayız.
                </p>
                <p>
                  Aydınlatma metnimiz, hangi verilerin toplandığı, işleme amaçları, hukuki dayanaklar, veri saklama 
                  süreleri ve haklarınız hakkında detaylı bilgi içermektedir.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Veri İhlali Bildirimi</h2>
                <p>
                  Kişisel verilerinizde bir ihlal tespit edilmesi durumunda, KVKK'nın öngördüğü şekilde en geç 72 saat 
                  içinde Kişisel Verileri Koruma Kurumuna bildirim yapılmakta ve etkilenen kişiler gecikmeksizin 
                  bilgilendirilmektedir.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>Haklarınızı Kullanma</h2>
                <p className='mb-4'>
                  KVKK kapsamındaki haklarınızı kullanmak için başvurunuzu aşağıdaki yollarla yapabilirsiniz:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>E-posta: kvkk@datnoc.com</li>
                  <li>Yazılı başvuru: 30N Gould Street, Sheridan, Wyoming, US 82801</li>
                  <li>Online form: Web sitemizdeki KVKK başvuru formu</li>
                </ul>
                <p className='mt-4'>
                  Başvurularınız en geç 30 gün içinde sonuçlandırılmakta ve size yazılı olarak bildirilmektedir.
                </p>
              </div>

              <div>
                <h2 className='text-white text-32 font-semibold mb-4'>İletişim</h2>
                <p className='mb-4'>
                  KVKK kapsamındaki haklarınızı kullanmak veya sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                  <p className='text-white font-semibold mb-2'>datnoc - Veri Koruma</p>
                  <p className='mb-2'>E-posta: <a href='mailto:kvkk@datnoc.com' className='text-primary hover:underline'>kvkk@datnoc.com</a></p>
                  <p className='mb-2'>Telefon: <a href='tel:+13072852570' className='text-primary hover:underline'>+1 (307) 285-2570</a></p>
                  <p>Adres: 30N Gould Street, Sheridan, Wyoming, US 82801</p>
                </div>
              </div>

              <div className='bg-dark_grey/50 p-6 rounded-lg border border-primary/20'>
                <p className='text-primary text-20 font-semibold mb-2'>Son Güncelleme</p>
                <p>Ocak 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KVKKPage

