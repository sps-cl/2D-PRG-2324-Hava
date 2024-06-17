using System;
using System.Collections.Generic;
using System.IO;


namespace encoding_1
{
    class Program
    {
        static void Main(string[] args)
        {
            using (FileStream fs = new FileStream("text.txt", FileMode.Open))
            {
                byte[] bytes = new byte[fs.Length];
                fs.Read(bytes, 0, bytes.Length);
                List<uint> values = UTF8_Coder.Decode(bytes);
                foreach (int value in values)
                {
                    Console.WriteLine(value);
                }
                Console.ReadLine();
            }
        }
    }
}
