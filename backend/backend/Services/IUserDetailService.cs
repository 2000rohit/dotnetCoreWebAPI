using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
   public interface IUserDetailService
    {
        List<Userdetail> Get();
        Userdetail Get(string id);
        Userdetail Create(Userdetail Userdetail);
        void Update(string id, Userdetail Userdetail);
        void Remove(string id);
    }
}
