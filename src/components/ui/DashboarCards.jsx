import React from 'react'
import {Card , CardHeader, CardContent} from '../../components/ui/Card'
import { Truck, Clock, ShoppingCart } from "lucide-react";
export default function DashboarCards() {
  return (
   <>
 
    <div className="grid grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader title="Shipped" />
          <CardContent className="flex items-center justify-between">
            <Truck className="text-blue-500 w-8 h-8" />
            <p className="text-3xl font-bold text-gray-800">67</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Pending" />
          <CardContent className="flex items-center justify-between">
            <Clock className="text-yellow-500 w-8 h-8" />
            <p className="text-3xl font-bold text-gray-800">24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="New Orders" />
          <CardContent className="flex items-center justify-between">
            <ShoppingCart className="text-green-500 w-8 h-8" />
            <p className="text-3xl font-bold text-gray-800">13</p>
          </CardContent>
        </Card>
      </div>
   </>
  )
}
