using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data
{
    public class User:BaseEntity
    {
        public virtual List<Product>? Products { get; set; }
        public virtual List<Article>? Articles { get; set; }
    }

    public class UserMap
    {

        public UserMap(EntityTypeBuilder<User> entityBuilder)
        {
        }
    }
}
