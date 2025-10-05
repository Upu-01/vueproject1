using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class Image :BaseEntity
    {

        // Храним изображение в виде байтов
        public byte[] ImageData { get; set; } = [];

        public string ContentType { get; set; } = ""; // например, "image/jpeg" или "image/png"
    }
}
