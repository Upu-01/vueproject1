namespace Data
{
    public class ProductGroup:BaseEntity
    {
        public string Name { get; set; } = "";
        public virtual List<Product>? Products { get; set; }
    }
}
