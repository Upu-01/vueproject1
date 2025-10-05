namespace Data
{
    public class ArticleGroup:BaseEntity
    {
        public bool Restricted { get; set; }
        public string Name { get; set; } = "";
        public virtual List<Article>? Articles { get; set; }
    }
}
