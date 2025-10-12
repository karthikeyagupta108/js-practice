#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        (int n;)
        cin >> n;
        vector<int> v(n);
        for (int i = 0; i < n; i++)
        {
            cin >> v[i];
        }
        unordered_map<int, int> mp;
        int result = 0;
        for (int i = 0; i < n; i++)
        {
            mp[v[i]]++;
        }
        for (auto &p : mp)
        {
            result += ((p.first > p.second) ? (p.first) : (p.second));
        }
        if (result != n)
        {
            cout << -1 << endl;
            continue;
        }

        int start = 1;
        int count = 0;
        for (auto &p : mp)
        {
            p.second = p.second / p.first;
            count += p.second;
        }
        while (start <count)
        {

            cout << start;
        }
        cout << "\n";
    }

    return 0;
}