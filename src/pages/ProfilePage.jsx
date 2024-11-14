import React, { useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-lg mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const EditProfileForm = ({ onClose }) => {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Picture
        </label>
        <div className="flex items-center space-x-4">
          <img
            src="/api/placeholder/64/64"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Change Photo
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          defaultValue="John Doe"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          defaultValue="john.doe@example.com"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          defaultValue="+1 (555) 123-4567"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const AddressForm = ({ onClose, address }) => {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address Name
        </label>
        <input
          type="text"
          defaultValue={address?.name}
          placeholder="Home, Office, etc."
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Street Address
        </label>
        <input
          type="text"
          defaultValue={address?.street}
          placeholder="Street address or P.O. box"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apartment/Suite
          </label>
          <input
            type="text"
            defaultValue={address?.unit}
            placeholder="Apt, Suite, Unit"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            defaultValue={address?.city}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State/Province
          </label>
          <input
            type="text"
            defaultValue={address?.state}
            placeholder="State"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP/Postal Code
          </label>
          <input
            type="text"
            defaultValue={address?.zip}
            placeholder="ZIP Code"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Country
        </label>
        <select
          defaultValue={address?.country || "US"}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-black"
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          {address ? "Save Changes" : "Add Address"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const ProfilePage = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setIsAddressModalOpen(true);
  };

  const handleAddNewAddress = () => {
    setEditingAddress(null);
    setIsAddressModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">MY PROFILE</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="/api/placeholder/128/128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-center mb-2">John Doe</h2>
              <p className="text-gray-600 text-center mb-4">
                Member since 2023
              </p>
              <button
                onClick={() => setIsEditProfileOpen(true)}
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Details */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Account Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Name
                    </label>
                    <p className="font-medium">John Doe</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Email
                    </label>
                    <p className="font-medium">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Phone
                    </label>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Shopping Stats */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Shopping Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Orders</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Wishlist Items</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Reviews</span>
                    <span className="font-bold">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">RECENT ORDERS</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6">Order ID</th>
                <th className="text-left py-4 px-6">Date</th>
                <th className="text-left py-4 px-6">Status</th>
                <th className="text-right py-4 px-6">Total</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((order) => (
                <tr key={order} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">
                    #ORD-2024-{order.toString().padStart(4, "0")}
                  </td>
                  <td className="py-4 px-6">March {order}, 2024</td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Delivered
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    ${(order * 100).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Saved Addresses */}
      <div>
        <h2 className="text-2xl font-bold mb-6">SAVED ADDRESSES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Home",
              street: "123 Home Street",
              unit: "Apt 101",
              city: "New York",
              state: "NY",
              zip: "10001",
            },
            {
              name: "Office",
              street: "456 Office Avenue",
              unit: "Suite 201",
              city: "New York",
              state: "NY",
              zip: "10002",
            },
          ].map((address, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold">{address.name}</h3>
                <button
                  onClick={() => handleEditAddress(address)}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Edit
                </button>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {address.street}
                <br />
                {address.unit}
                <br />
                {address.city}, {address.state} {address.zip}
                <br />
                United States
              </p>
            </div>
          ))}

          <div
            onClick={handleAddNewAddress}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl">+</span>
            </div>
            <p className="font-medium">Add New Address</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        title="Edit Profile"
      >
        <EditProfileForm onClose={() => setIsEditProfileOpen(false)} />
      </Modal>

      {/* Address Modal */}
      <Modal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        title="Edit Profile"
      >
        <AddressForm onClose={() => isAddressModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default ProfilePage;
