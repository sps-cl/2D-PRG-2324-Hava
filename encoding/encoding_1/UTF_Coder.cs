using System.Collections.Generic;

namespace encoding_1
{
    public class UTF8_Coder
    {
        public static List<uint> Decode(byte[] bytes)
        {
            List<uint> values = new List<uint>();
            for (int i = 0; i < bytes.Length; i++)
            {
                byte b = bytes[i];
                if (b < 128)
                {
                    values.Add(b);
                }
                else
                {
                    byte mask = 63;
                    int count = 1;
                    while ((b &= mask) > (mask >>= 1)) count++;
                    uint value = b;
                    for (int j = 1; j <= count; j++)
                    {
                        value <<= 6;
                        value |= (uint)bytes[j + i] & 63;
                    }
                    i += count;
                    values.Add(value);
                }
            }
            return values;
        }
        public static List<byte> Encode(List<uint> values)
        {
            List<byte> bytes = new List<byte>();
            foreach (uint value in values)
            {
                if (value <= 255)
                {
                    bytes.Add((byte)value);
                }
            }
            return bytes;
        }
    }
}
