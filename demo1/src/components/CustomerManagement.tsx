import React, { useState } from 'react';
import { Search, Filter, Download, Mail, Phone, Calendar, MapPin } from 'lucide-react';

const CustomerManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);

    const customers = [
        {
            id: 1,
            name: 'Nguyễn Thị Mai',
            email: 'mai.nguyen@email.com',
            phone: '0901234567',
            location: 'TP. Hồ Chí Minh',
            totalSpent: 2500000,
            eventsAttended: 5,
            lastPurchase: '2024-02-15',
            status: 'VIP',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            id: 2,
            name: 'Trần Văn Hùng',
            email: 'hung.tran@email.com',
            phone: '0987654321',
            location: 'Hà Nội',
            totalSpent: 1200000,
            eventsAttended: 3,
            lastPurchase: '2024-02-20',
            status: 'Regular',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            id: 3,
            name: 'Lê Thị Hoa',
            email: 'hoa.le@email.com',
            phone: '0912345678',
            location: 'Đà Nẵng',
            totalSpent: 800000,
            eventsAttended: 2,
            lastPurchase: '2024-03-01',
            status: 'New',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            id: 4,
            name: 'Phạm Minh Tuấn',
            email: 'tuan.pham@email.com',
            phone: '0976543210',
            location: 'TP. Hồ Chí Minh',
            totalSpent: 3200000,
            eventsAttended: 8,
            lastPurchase: '2024-02-28',
            status: 'VIP',
            avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            id: 5,
            name: 'Vũ Thị Lan',
            email: 'lan.vu@email.com',
            phone: '0965432109',
            location: 'Hải Phòng',
            totalSpent: 600000,
            eventsAttended: 1,
            lastPurchase: '2024-03-05',
            status: 'New',
            avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'VIP':
                return 'bg-purple-100 text-purple-800';
            case 'Regular':
                return 'bg-blue-100 text-blue-800';
            case 'New':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleSelectCustomer = (customerId: number) => {
        setSelectedCustomers(prev =>
            prev.includes(customerId)
                ? prev.filter(id => id !== customerId)
                : [...prev, customerId]
        );
    };

    const handleSelectAll = () => {
        setSelectedCustomers(
            selectedCustomers.length === customers.length
                ? []
                : customers.map(c => c.id)
        );
    };

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
    <div>
        <h2 className="text-2xl font-bold text-gray-800">Quản lý khách hàng</h2>
    <p className="text-gray-600 mt-1">Theo dõi và quản lý thông tin khách hàng</p>
    </div>

    <div className="flex gap-2">
    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
    <Download className="h-4 w-4 mr-2" />
        Xuất Excel
    </button>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
    <Mail className="h-4 w-4 mr-2" />
        Gửi Email
    </button>
    </div>
    </div>

    {/* Search and Filter */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex flex-col lg:flex-row gap-4">
    <div className="flex-1 relative">
    <input
        type="text"
    placeholder="Tìm kiếm khách hàng theo tên, email hoặc số điện thoại..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex gap-2">
    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option>Tất cả trạng thái</option>
    <option>VIP</option>
    <option>Regular</option>
    <option>New</option>
    </select>

    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option>Tất cả địa điểm</option>
    <option>TP. Hồ Chí Minh</option>
    <option>Hà Nội</option>
    <option>Đà Nẵng</option>
    <option>Khác</option>
    </select>
    </div>
    </div>
    </div>

    {/* Customer Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="text-2xl font-bold text-blue-600 mb-2">2,456</div>
    <div className="text-gray-600">Tổng khách hàng</div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="text-2xl font-bold text-purple-600 mb-2">342</div>
        <div className="text-gray-600">Khách VIP</div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="text-2xl font-bold text-green-600 mb-2">1,456</div>
    <div className="text-gray-600">Khách thường</div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="text-2xl font-bold text-yellow-600 mb-2">658</div>
        <div className="text-gray-600">Khách mới</div>
    </div>
    </div>

    {/* Customer Table */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="p-6 border-b border-gray-200">
    <div className="flex items-center justify-between">
    <h3 className="text-lg font-semibold text-gray-800">
        Danh sách khách hàng ({filteredCustomers.length})
    </h3>
    {selectedCustomers.length > 0 && (
        <div className="text-sm text-blue-600">
            Đã chọn {selectedCustomers.length} khách hàng
    </div>
    )}
    </div>
    </div>

    <div className="overflow-x-auto">
    <table className="w-full">
    <thead className="bg-gray-50">
    <tr>
        <th className="px-6 py-3 text-left">
    <input
        type="checkbox"
    checked={selectedCustomers.length === customers.length}
    onChange={handleSelectAll}
    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Khách hàng
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Liên hệ
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Địa điểm
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Tổng chi tiêu
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Sự kiện
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Trạng thái
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Mua gần nhất
    </th>
    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
        Hành động
    </th>
    </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
            <td className="px-6 py-4">
            <input
                type="checkbox"
            checked={selectedCustomers.includes(customer.id)}
            onChange={() => handleSelectCustomer(customer.id)}
    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
    <div className="flex items-center">
    <img
        className="h-10 w-10 rounded-full object-cover"
    src={customer.avatar}
    alt={customer.name}
    />
    <div className="ml-4">
    <div className="text-sm font-medium text-gray-900">
        {customer.name}
        </div>
        <div className="text-sm text-gray-500">
        ID: #{customer.id.toString().padStart(4, '0')}
    </div>
    </div>
    </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900 flex items-center mb-1">
    <Mail className="h-3 w-3 mr-1 text-gray-400" />
        {customer.email}
        </div>
        <div className="text-sm text-gray-500 flex items-center">
    <Phone className="h-3 w-3 mr-1 text-gray-400" />
        {customer.phone}
        </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900 flex items-center">
    <MapPin className="h-3 w-3 mr-1 text-gray-400" />
        {customer.location}
        </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm font-semibold text-green-600">
        {customer.totalSpent.toLocaleString()}₫
    </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900">
        {customer.eventsAttended} sự kiện
    </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(customer.status)}`}>
    {customer.status}
    </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900 flex items-center">
    <Calendar className="h-3 w-3 mr-1 text-gray-400" />
        {new Date(customer.lastPurchase).toLocaleDateString('vi-VN')}
        </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <button className="text-blue-600 hover:text-blue-900 mr-3">
        Xem
        </button>
        <button className="text-green-600 hover:text-green-900">
        Email
        </button>
        </td>
        </tr>
))}
    </tbody>
    </table>
    </div>

    {/* Pagination */}
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div className="flex-1 flex justify-between sm:hidden">
    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Trước
        </button>
        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Sau
        </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
        <p className="text-sm text-gray-700">
        Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> của{' '}
    <span className="font-medium">{filteredCustomers.length}</span> kết quả
    </p>
    </div>
    <div>
    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
        Trước
        </button>
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
        1
        </button>
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
        2
        </button>
        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
        Sau
        </button>
        </nav>
        </div>
        </div>
        </div>
        </div>
        </div>
);
};

export default CustomerManagement;