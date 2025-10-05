using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data
{
    public abstract class BaseArticle : BaseEntity
    {
        public string Name { get; set; } = "";
        public virtual Image? Image { get; set; }
        public string HtmlText { get; set; } = "";
        public double Rating { get; set; }

    }
    public class Article: BaseArticle
    {
        public bool Restricted { get; set; }
        public virtual List<ArticleGroup>? Groups { get; set; }
    }
    public class BannerCarusel : BaseArticle
    {
    }
    public class WhyMe:BaseArticle
    {
    }
    public class AboutUs : BaseArticle
    {

    }
    public class Services : BaseArticle
    {
    }
    public class PaymentInfo : BaseArticle
    {
    }
    public class Contacts : BaseArticle
    {
    }
    public class Review : BaseArticle
    {
    }
    public class BannerCarouselMap
    {

        public BannerCarouselMap(EntityTypeBuilder<BannerCarusel> entityBuilder)
        {
        }
    }
    public class WhyMeMap
    {

        public WhyMeMap(EntityTypeBuilder<WhyMe> entityBuilder)
        {
        }
    }
    public class AboutUsMap
    {

        public AboutUsMap(EntityTypeBuilder<AboutUs> entityBuilder)
        {
        }
    }
    public class ServicesMap
    {
        public ServicesMap(EntityTypeBuilder<Services> entityBuilder)
        {
        }
    }
    public class PaymentInfoMap
    {
        public PaymentInfoMap(EntityTypeBuilder<PaymentInfo> entityBuilder)
        {
        }
    }
    public class ContactsMap
    {
        public ContactsMap(EntityTypeBuilder<Contacts> entityBuilder)
        {
        }
    }
    public class ReviewMap
    {
        public ReviewMap(EntityTypeBuilder<Review> entityBuilder)
        {
        }
    }
}
