namespace Data
{
    public class Product:BaseEntity
    {
        public string Name { get; set; } = "";
        public string SubName { get; set; } = "";
        public string Description { get; set; } = "";
        public virtual List<Image>? Images { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public virtual List<Badge>? Badges { get; set; }
        public virtual List<ProductGroup>? Groups { get; set; }
    }
}
